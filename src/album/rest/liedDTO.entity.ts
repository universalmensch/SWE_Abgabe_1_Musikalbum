/* eslint-disable @typescript-eslint/no-magic-numbers */

import { IsInt, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LiedDTO {
    @MaxLength(32)
    @ApiProperty({ example: 'Die Beschriftung', type: String })
    readonly name!: string;

    @IsInt()
    @ApiProperty({ example: 79, type: Number })
    readonly dauerInSekunden: number | undefined;
}
/* eslint-enable @typescript-eslint/no-magic-numbers */