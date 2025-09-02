# 🚀 Guia de Deploy para Hostinger

## Configuração do Projeto

O projeto já está configurado para gerar um export estático com as seguintes configurações:

- ✅ `output: 'export'` - Gera arquivos estáticos
- ✅ `trailingSlash: true` - URLs com trailing slash para melhor compatibilidade
- ✅ `distDir: 'out'` - Pasta de saída será `out/`
- ✅ `images: { unoptimized: true }` - Imagens otimizadas para static hosting

## Comandos para Build

### 1. Build de Produção

```bash
npm run build
```

ou

```bash
npm run export
```

### 2. Verificar se funcionou

Após o build, você deve ver uma pasta `out/` na raiz do projeto.

## Arquivos para Upload na Hostinger

**Faça upload de TODO o conteúdo da pasta `out/` para o diretório `public_html` da sua hospedagem.**

### Estrutura da pasta `out/`:

```
out/
├── index.html                 # Página inicial
├── sobre/
│   └── index.html            # Página sobre
├── servicos/
│   └── index.html            # Página serviços
├── portfolio/
│   └── index.html            # Página portfólio
├── contato/
│   └── index.html            # Página contato
├── comecar-projeto/
│   └── index.html            # Página começar projeto
├── _next/
│   ├── static/
│   │   ├── css/              # Arquivos CSS
│   │   ├── js/               # Arquivos JavaScript
│   │   └── media/            # Imagens otimizadas
├── images/                   # Suas imagens
└── outros arquivos...
```

## Processo de Upload na Hostinger

1. **Acesse o hPanel da Hostinger**
2. **Vá em "Gerenciador de Arquivos"**
3. **Navegue até a pasta `public_html`**
4. **Delete todos os arquivos existentes** (se houver)
5. **Selecione TODOS os arquivos da pasta `out/`**
6. **Faça upload mantendo a estrutura de pastas**

## URLs do Site

Após o upload, seu site estará disponível em:

- `https://seudominio.com/` - Página inicial
- `https://seudominio.com/sobre/` - Sobre
- `https://seudominio.com/servicos/` - Serviços
- `https://seudominio.com/portfolio/` - Portfólio
- `https://seudominio.com/contato/` - Contato
- `https://seudominio.com/comecar-projeto/` - Começar Projeto

## Verificações Importantes

- ✅ **Todas as páginas são estáticas** - sem dependências server-side
- ✅ **Imagens otimizadas** para hosting estático
- ✅ **CSS e JS minificados** automaticamente
- ✅ **SEO otimizado** com meta tags apropriadas
- ✅ **Responsivo** para todos os dispositivos

## Solução de Problemas

### Se a pasta `out/` não foi criada:

1. Verifique se não há erros no build
2. Certifique-se de que todas as dependências estão instaladas: `npm install`
3. Tente limpar o cache: `rm -rf .next` (ou delete a pasta .next manualmente)
4. Execute novamente: `npm run build`

### Se alguma página não carregar:

1. Verifique se todos os arquivos da pasta `out/` foram enviados
2. Certifique-se de que a estrutura de pastas foi mantida
3. Verifique se o domínio está apontando corretamente para `public_html`

## Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código
2. Execute `npm run build`
3. Faça upload novamente de todos os arquivos da pasta `out/`

---

✨ **Seu site está pronto para ser hospedado na Hostinger!**
