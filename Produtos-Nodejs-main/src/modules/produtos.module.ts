import { Module } from '@nestjs/common';
import { Produto } from '../entities/produto.entity';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from '../produtos/produtos.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
