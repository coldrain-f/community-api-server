import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * 게시글 등록
   * @param createBoardDto 게시글의 제목, 내용, 비밀번호
   * @returns 등록된 게시글의 번호
   */
  async create(createBoardDto: CreateBoardDto): Promise<number> {
    const { title, content, password } = createBoardDto;

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 날씨 가져오기
    const currentCondition = await this.getWeatherCurrentCondition();
    const weather = currentCondition.text;

    // Entity 저장
    const savedBoard = await this.boardRepository.save({
      title,
      content,
      weather,
      password: hashedPassword,
    });

    return savedBoard.id;
  }

  /**
   * 게시글 조회 페이징
   * @param pageNo 페이지 번호
   * @returns 페이지 번호에 해당하는 20개의 게시글 배열
   */
  async findAll(pageNo: number): Promise<Board[]> {
    if (pageNo === 0) return [];
    const pageSize = 20;
    pageNo = pageNo || 1;

    return await this.boardRepository.find({
      select: {
        id: true,
        title: true,
        weather: true,
        content: true,
        createdAt: true,
        updatedAt: true,
      },
      order: { createdAt: 'desc' },
      skip: (pageNo - 1) * pageSize, // 시작 인덱스
      take: pageSize, // 페이지 당 데이터 수
    });
  }

  /**
   * 게시글 상세 조회
   * @param id 게시글 번호
   * @returns 게시글 번호에 해당하는 단일 게시글
   */
  async findOne(id: number) {
    const board = await this.boardRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!board) {
      throw new NotFoundException('게시글을 찾을 수 없습니다.');
    }
    return board;
  }

  /**
   * 게시글 수정
   * 요청한 비밀번호와 실제 게시글의 비밀번호가 일치하면 수정된다.
   * @param id 게시글 번호
   * @param updateBoardDto 게시글의 제목, 내용, 비밀번호
   */
  async update(id: number, updateBoardDto: UpdateBoardDto) {
    const { title, content, password } = updateBoardDto;
    const board = await this.findOne(id);

    if (!(await bcrypt.compare(password, board.password))) {
      throw new ForbiddenException('비밀번호가 일치하지 않습니다.');
    }

    board.title = title;
    board.content = content;
    await this.boardRepository.save(board);
  }

  /**
   * 게시글 삭제 (Soft Delete)
   * 요청한 비밀번호와 실제 게시글의 비밀번호가 일치하면 삭제된다.
   * @param id 게시글 번호
   * @param password 요청 비밀번호
   */
  async remove(id: number, password: string) {
    const board = await this.findOne(id);

    if (!(await bcrypt.compare(password, board.password))) {
      throw new ForbiddenException('비밀번호가 일치하지 않습니다.');
    }
    board.isDeleted = true;
    await this.boardRepository.save(board);
  }

  async getWeatherCurrentCondition() {
    const REALTIME_API_URL = this.configService.get<string>('REALTIME_API_URL');
    const response = await firstValueFrom(
      this.httpService.get(REALTIME_API_URL),
    );

    return response.data.current.condition;
  }
}
