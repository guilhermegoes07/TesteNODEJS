import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.produtosService.findOne(id);
  }

  @Post()
  create(@Body() produto: Produto) {
    return this.produtosService.create(produto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() produto: Produto) {
    return this.produtosService.update(id, produto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.produtosService.delete(id);
  }
}
