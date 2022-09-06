import { timestamp } from 'rxjs';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 20,
    comment: '해당 컬럼은 게시글의 제목을 나타냅니다.',
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 200,
    comment: '해당 컬럼은 게시글의 본문을 나타냅니다.',
  })
  content: string;

  @Column({
    type: 'varchar',
    comment: '해당 컬럼은 게시글의 비밀번호를 나타냅니다.',
  })
  password: string;

  @Column({
    default: null,
    type: 'varchar',
    comment: '해당 컬럼은 게시글 업로드 시점의 날씨를 나타냅니다.',
  })
  weather?: string;

  @CreateDateColumn({
    type: 'timestamp',
    comment: '해당 컬럼은 게시글 등록일을 나타냅니다.',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    comment: '해당 컬럼은 게시글 수정일을 나타냅니다.',
  })
  updatedAt: Date;

  @Column({
    default: false,
    comment: '해당 컬럼은 게시글의 삭제 여부를 나타냅니다.',
  })
  isDeleted: boolean;
}
