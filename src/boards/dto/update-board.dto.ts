import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateBoardDto {
  @ApiProperty({
    example: '백견이불여일타 JSP & Servlet',
    description: '게시글의 제목입니다.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  title: string;

  @ApiProperty({
    example: '페이지네이션과 필터링의 차이는...',
    description: '게시글의 본문입니다.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  content: string;

  @ApiProperty({
    example: 'ppppp1',
    description: '게시글의 비밀번호입니다.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
