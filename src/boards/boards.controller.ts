import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@ApiTags('boards')
@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @ApiOperation({ summary: '게시글 등록' })
  @ApiCreatedResponse({ description: '게시글 등록 성공' })
  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    return await this.boardsService.create(createBoardDto);
  }

  @ApiOperation({ summary: '게시글 목록 조회 - 페이징' })
  @ApiOkResponse({ description: '게시글 목록 조회 성공' })
  @Get()
  findAll(@Query('page', ParseIntPipe) page: number) {
    return this.boardsService.findAll(page);
  }

  @ApiOperation({ summary: '게시글 수정' })
  @ApiOkResponse({ description: '게시글 수정 성공' })
  @ApiForbiddenResponse({ description: '비밀번호 불일치로 게시글 수정 실패' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardsService.update(id, updateBoardDto);
  }

  @ApiOperation({ summary: '게시글 삭제' })
  @ApiOkResponse({ description: '게시글 삭제 성공' })
  @ApiForbiddenResponse({ description: '비밀번호 불일치로 게시글 삭제 실패' })
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Body('password') password: string,
  ) {
    return this.boardsService.remove(id, password);
  }
}
