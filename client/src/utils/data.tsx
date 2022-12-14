import { TbEdit } from 'react-icons/tb';
import { BsTrash } from 'react-icons/bs';
import { HiUpload } from 'react-icons/hi';
import { IconType } from '../types';


export const enum IconText {
  excluir = 'excluir',
  editar = 'editar',
  exportarCsv = 'exportar em.csv',
  exportarPdf = 'exportar em.pdf'
}

export const encarteItems: string[] = ['PARA VOCÊ', 'PRDUTOS MAIS VENDIDOS', 'SAZONAL', 'NAS LOJAS', 'ESPECIIAIS', 'NOVIDADES']

export const sazonalidadeIconsList: IconType[] = [
    {
      text: IconText.editar,
      icon: <TbEdit size={20} className="icon-action"/>
    },
    {
      text: IconText.excluir,
      icon: <BsTrash size={20} className="icon-action"/>
    },
    {
      text: IconText.exportarCsv,
      icon: <HiUpload size={20} className="icon-action"/> 
    },
    {
      text: IconText.exportarPdf,
      icon: <HiUpload size={20} className="icon-action"/> 
    },
  ]
  export const produtosIcons: IconType[] = [
    {
      text: IconText.exportarCsv,
      icon: <HiUpload size={20} className="icon-action"/> 
    },
    {
      text: IconText.exportarPdf,
      icon: <HiUpload size={20} className="icon-action"/> 
    },
  ]
 
  export const sazonalidadeTableHeader: string[] = [
    'ID',
    'NOME SAZONALIDADE',
    'DESCRIÇÃO',
    'DATA INÍCIO',
    'DATA FIM',
    'DATA PROX.INÍCIO',
    'STATUS',
    'DATA CAD.',
    'USUÁRIO CAD',
  ]
  export const productTableHeader: string[] = [
    'ID',
    'NOME PRODUTO',
    'NOME FAMÍLIA',
    'MARCA',
    'CLASSE',
    'EMB',
    'QNT',
    'CATEGORIA'
  ]
 
  

  