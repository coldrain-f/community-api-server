import {
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto): Promise<number> {
    const { title, content, password } = createBoardDto;

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // Entity 저장
    const savedBoard = await this.boardRepository.save({
      title,
      content,
      password: hashedPassword,
    });

    return savedBoard.id;
  }

  findAll() {
    return `This action returns all boards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  async remove(id: number, password: string) {
    const board = await this.boardRepository.findOne({
      where: { id, isDeleted: false },
    });

    if (!board) {
      throw new NotFoundException('게시글을 찾을 수 없습니다.');
    }

    if (!(await bcrypt.compare(password, board.password))) {
      throw new ForbiddenException('비밀번호가 일치하지 않습니다.');
    }
    board.isDeleted = true;
    await this.boardRepository.save(board);
  }
}
