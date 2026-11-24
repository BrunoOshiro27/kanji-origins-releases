# Omniji

**Por que cada kanji tem a forma que tem.** O Omniji conta a origem de cada kanji: o desenho antigo, as partes que o formam, como o sentido foi mudando e as palavras e frases do dia a dia. Funciona offline, é grátis e não tem conta, anúncio nem rastreamento.

> Antes se chamava **Kanji Origins**. Quem já usava recebe a versão nova normalmente, com os mesmos dados.

**[⬇ Baixar a última versão](https://github.com/BrunoOshiro27/kanji-origins-releases/releases/latest)** · **[📱 Abrir no navegador / iPhone](https://brunooshiro27.github.io/kanji-origins-releases/)**

## O que tem

- **637 kanji** com carta completa: o JLPT 4 e o 3 inteiros e boa parte do JLPT 2 (mais lotes vêm aí).
- **Origem:** o que o desenho mostrava, com a definição do _Shuowen Jiezi_ (o dicionário chinês do ano 100) e as formas antigas (oráculo, bronze, selo).
- **Partes:** cada parte do kanji, se dá o sentido ou o som, e uma nota quando ela engana ("não é o sol: é o capacete").
- **Caminho do sentido:** como o significado foi mudando até o de hoje.
- **Palavras e frases** com kana, romaji, português e inglês, e a voz do sistema para ouvir.
- **Não confunda:** os kanji parecidos, com a diferença explicada.
- **Tudo ligado:** um kanji citado no texto abre a carta dele, e cada carta mostra os kanji que a usam.
- Busca por kanji, romaji ou significado (sem acento também), por nível do JLPT e por série escolar no Japão.
- Lista de difíceis e baralho do **Anki** (`.apkg`) de cada nível.
- Em português, inglês e japonês; tema claro e escuro.

## Qual arquivo baixar

Na [página da última versão](https://github.com/BrunoOshiro27/kanji-origins-releases/releases/latest), em **Assets**:

| Sistema | Arquivo | Atualiza sozinho? |
| --- | --- | --- |
| **Windows** | `Omniji_X.Y.Z_x64-setup.exe` | Sim |
| **macOS** (Apple Silicon: M1, M2…) | `Omniji_X.Y.Z_aarch64.dmg` | Sim |
| **macOS** (Intel) | `Omniji_X.Y.Z_x64.dmg` | Sim |
| **Ubuntu, Debian, Mint, Pop!_OS** | `Omniji_X.Y.Z_amd64.deb` | Avisa e instala com a sua senha |
| **Fedora, openSUSE** | `Omniji-X.Y.Z-1.x86_64.rpm` | Avisa e instala com a sua senha |
| **Qualquer Linux** | `Omniji_X.Y.Z_amd64.AppImage` | Sim |
| **Android** | `omniji_X.Y.Z_android.apk` | Não: baixe a versão nova por aqui |
| **iPhone / iPad** | [versão web](https://brunooshiro27.github.io/kanji-origins-releases/) | Sim, ao abrir |

Os arquivos `.sig`, `.tar.gz` e o `latest.json` são da atualização automática: não precisa baixar.

> Às vezes uma versão sai primeiro só para algumas plataformas. Se o seu arquivo não estiver na última versão, pegue o da versão anterior, na [lista de versões](https://github.com/BrunoOshiro27/kanji-origins-releases/releases).

## Como instalar

<details>
<summary><b>Windows</b></summary>

Abra o `.exe`. Como o app ainda não tem certificado de assinatura pago, o Windows pode mostrar **"O Windows protegeu o computador"**: clique em **Mais informações → Executar assim mesmo**.

</details>

<details>
<summary><b>macOS</b></summary>

Abra o `.dmg` e arraste o **Omniji** para **Aplicativos**. O app ainda não é assinado pela Apple, então na primeira vez o macOS pode recusar ("não pode ser aberto" ou "está danificado"). Para liberar, abra o **Terminal** e rode:

```bash
xattr -cr /Applications/Omniji.app
```

Depois abra normalmente. Em versões mais antigas do macOS também funciona clicar com o botão direito no app → **Abrir**.

</details>

<details>
<summary><b>Linux</b></summary>

Ubuntu, Debian e derivados:

```bash
sudo apt install ./Omniji_X.Y.Z_amd64.deb
```

Fedora e openSUSE:

```bash
sudo dnf install ./Omniji-X.Y.Z-1.x86_64.rpm
```

AppImage (qualquer distro, sem instalar):

```bash
chmod +x Omniji_X.Y.Z_amd64.AppImage
./Omniji_X.Y.Z_amd64.AppImage
```

**Ficou preso na v0.1.5 com "Failed to install package"?** Era o nome antigo do pacote. Rode `sudo apt remove kanji-origins` e instale o `.deb` novo; seus difíceis e o histórico continuam lá. A partir da v0.1.7 a atualização faz isso sozinha.

</details>

<details>
<summary><b>Android</b></summary>

Baixe o `.apk` no celular e abra. O Android vai pedir para **permitir a instalação de apps desta fonte** (o navegador ou o gerenciador de arquivos): permita e toque em **Instalar**. O Play Protect pode avisar que o app é desconhecido; toque em **Instalar mesmo assim**.

Para atualizar, baixe o `.apk` da versão nova e instale por cima: os dados ficam.

</details>

<details>
<summary><b>iPhone e iPad</b></summary>

Não precisa de App Store:

1. Abra **https://brunooshiro27.github.io/kanji-origins-releases/** no **Safari**.
2. Toque em **Compartilhar** (o quadrado com a seta) → **Adicionar à Tela de Início**.
3. Abra pelo ícone novo. Na primeira vez, espere carregar tudo (uns 7 MB): depois funciona sem internet.

A versão web é a mesma do app, sem o baralho do Anki (que precisa do app instalado). Ela também funciona no navegador de qualquer computador ou celular.

</details>

## Privacidade

O Omniji não tem servidor, conta nem estatística de uso. Os kanji vêm num banco dentro do app; a lista de difíceis e o histórico ficam só no seu aparelho. A internet só é usada para baixar a versão nova (e, na versão web, o primeiro carregamento).

## Créditos e licenças

O conteúdo das cartas é escrito a partir de fontes abertas:

- [KANJIDIC2](https://www.edrdg.org/wiki/index.php/KANJIDIC_Project) e [JMdict](https://www.edrdg.org/jmdict/j_jmdict.html), do Electronic Dictionary Research and Development Group (CC BY-SA 4.0);
- [KanjiVG](https://kanjivg.tagaini.net/), © Ulrich Apel e colaboradores (CC BY-SA 3.0);
- _Shuowen Jiezi_ (說文解字), de Xu Shen, pelo [Wikisource](https://zh.wikisource.org/wiki/說文解字) (domínio público);
- [Unihan](https://www.unicode.org/charts/unihan.html), © Unicode, Inc. (Unicode License v3);
- formas antigas do [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:Ancient_Chinese_characters_project), com a licença e o autor de cada imagem na carta.

O conteúdo derivado sai sob **CC BY-SA 4.0**. A lista completa está na tela **Créditos** do app.

## Problemas e sugestões

Achou um erro numa carta ou o app não abriu? Abra uma [issue](https://github.com/BrunoOshiro27/kanji-origins-releases/issues) contando o sistema, a versão (tela **Sobre**) e o que aconteceu.

---

<sub>Este repositório guarda só os instaladores e a versão web. A versão web é publicada na branch `gh-pages`, e o `latest.json` de cada versão é o que a atualização automática lê.</sub>
