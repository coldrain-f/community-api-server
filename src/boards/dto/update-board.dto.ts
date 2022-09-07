import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateBoardDto {
  @ApiProperty({
    example: '게시글 제목',
    description: '게시글의 제목입니다.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  title: string;

  @ApiProperty({
    example: '게시글 본문',
    description: '게시글의 본문입니다.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  content: string;

  @ApiProperty({
    example: 'password0',
    description: '게시글의 비밀번호입니다.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
