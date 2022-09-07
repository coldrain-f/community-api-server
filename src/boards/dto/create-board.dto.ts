import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateBoardDto {
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
  @Matches(/^(?=.*?[0-9]).{6,}$/, {
    message:
      '비밀번호는 6자 이상이어야 하고, 숫자 1개 이상 반드시 포함 되어야 합니다.',
  })
  password: string;
}
