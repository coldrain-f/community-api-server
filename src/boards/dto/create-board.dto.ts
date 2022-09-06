import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*?[0-9]).{6,}$/, {
    message:
      '비밀번호는 6자 이상이어야 하고, 숫자 1개 이상 반드시 포함 되어야 합니다.',
  })
  password: string;
}
