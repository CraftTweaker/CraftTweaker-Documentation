# GitHub のオンライン エディタを使用してファイルを作成

## 要件

GitHubアカウントを作成し、 [アカウントにWikiをフォーク](/Contribute/SetupGithub)する必要があります。

## 導入

GitHubのオンラインエディタでは、ブラウザ以外を使用してファイルを変更して作成することができます。  
ローカルコピーを使用する [ほど汎用性はないかもしれません](/Contribute/LocalClone/CreateCommit/) が、 [git](/Contribute/LocalClone/InstallingGit/) の設定を心配する必要はありません。

This guide will show you how to create a new wiki file using github's online editor.  
Your main reason for adding new pages is most likely to fill in missing information, but maybe you also want to add an example wiki entry for a given mod handler, whatever the reason, feel free to commit changes and eventually [file a Pull Request](/Contribute/PullRequest).

ただし、英語版を作成する必要があることを覚えておいてください。 翻訳は [Crowdin](https://crowdin.com/project/crafttweaker-documentation/) を介して処理されます (ただし、PR がマージされた後にのみ)。

## ファイルの作成場所

理論的には、ファイルをどこに置いても問題ありませんが、現在のスキームに合うようにしてください:

- すべてのファイルは `docs` フォルダ内にある必要があります。
- ファイル構造はナビゲーションバーのクラムと一致する必要があります。 例: Wikiでナビゲーションバーを使用する場合、 `ICraftingRecipe` は `Vanilla/Recipes/CraftingRecipe/ICraftingRecipe` にあります。 ICraftingRecipe のファイルは `docs/Vanilla/Recipes/Crafting/ICraftingRecipe.md` で見つけることができます。 見てのとおり、パスは完全に一致しませんが、ファイルを見つけるのに十分です。
- 1つのModのすべての情報は、1つのグループ/フォルダに残っている必要があります。

## ファイルを作成

将来のファイルのパスが正常に見つかったら、GitHubにファイルが含まれているフォルダに移動します。  
存在しない場合は心配しないで、ファイルを作成できます。

`Secret_Informationという名前のファイルを作成するとします。 d <code> docs/AdvancedFunctions` : ``:  
GitHubでパスを見つけて、 `新しいファイルを作成` をクリックします ![ファイル作成ボタン](/Contribute/assets/OnlineEditor_CreateFileButton.png)

新しいファイルエディタページが表示されます。  
最初に、作成されるファイルのパスを見ることができます。 パスに表示されているディレクトリにファイルを正確に作成したい場合。 ファイルのタイトルと拡張子を提供するだけです このwikiはmarkdownを使用するため、すべてのwikiエントリファイルには `.md` の拡張子があることを覚えておいてください。

ファイルを(存在しない可能性があります)サブフォルダ、またはパス下の複数のフォルダに作成したい場合。 `/` を使用してフォルダ名を区別できます (指定されたパスに既に表示されているように)。

エディタを使用すると、ファイルを好きなように作成したり、コンパイルされた書式のプレビューを直接表示したりすることができます。

ファイルの構文が新しくなった場合、wikiはMarkDownを使用します。 googleを使って見つけるべきチュートリアルはたくさんあるはずです(もしくは、こちらに追加することもできます)。

## ファイルをインデックスに追加

ファイルを作成して作成(下記参照)したら、ファイルをインデックスに追加する必要があります。 後でナビゲーションバーに表示できるようにします

このインデックスは `mkdocs.yml` ファイルです。

このファイルには、Wikiを作成するために必要なすべてが含まれています。 それを壊さないようにする必要があります(ただし、PRがビルドを壊した場合は、それが来る場合は教えてくれます)。

`ページ` リストにファイルとカテゴリを追加するだけです。  
フォーマットはかなり単純です。

- エントリの先頭は `-`
- 次に、グループまたはエントリの(表示、英語)名、続いて `:`
- グループを作成する場合( `Vanilla` や `Mods`など)、次の行に進み、2つのスペースがインライン化されています。
- ページファイルへの実際の参照を作成する場合は、 `:` とスペースの後に同じ行に追加します。 ビルドが期待どおりに動作することを確認するには、 `'` を単一引用符で囲むようにしてください。 パスは `docs` フォルダからの相対パスなので、 `docs/Vanilla/Commands.md` は `Vanilla/Commands.md` になります。

例については、github の [current mkdocs.yml ファイル](https://github.com/CraftTweaker/CraftTweaker-Documentation/blob/master/mkdocs.yml) を確認してください。 または、このファイルを編集し、ここに独自の例を追加します。

## 変更を保存/コミット

*注意: この説明は編集ファイルガイドに基づいていますが、同じ原則が適用されます。必要に応じて、自由に自分のバージョンに置き換えてください*

ファイルコンテンツを作成したら、変更を保存したいことを GitHub に知らせる必要があります。

エディタの下のコミットボックスは次のようなものです:  
ファイルを単に保存することはできません。 あなたが何をしたか(コミットタイトル)の概要と、必要に応じて簡単な説明を提供する必要があります。ここでは、変更の理由や変更内容などの追加情報を入力できます。

デフォルトでは以下のようになります。  
![デフォルトのコミット](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

この例では、コミット タイトル (または要約を編集) は `Update Array_and_Loops.md` です。 GitHub は実際の変更が何をすべきかを知ることができないため、これと同じようにジェネリックなものを試行します。

追加のタイトルや説明を追加したいと思うかもしれませんが、後でプルリクエストを簡単に確認できますが、必須ではありません。

GitHub アカウントに複数のメールアドレスを登録している場合は、コミットを作成するメールアドレスを選択できます。 しかし、これは貢献するための実質的な影響を与えることはありません。  
マスターブランチに直接コミットするか、またはコミット用に新しいブランチを作成するかを決定することもできます。 ほとんどの場合、マスターブランチにコミットすることはうまく機能します。

A filled out example might look like this: ![コミットボックス 塗りつぶし](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## 次の操作方法

After you have committed your changes, you can go on and [edit](/Contribute/OnlineEditor_Edit) or create more files using the online editor.  
After you have done all your changes, you can [file a Pull Request](/Contribute/PullRequest).