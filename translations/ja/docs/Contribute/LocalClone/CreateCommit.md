# コミットを作成

## 前提条件

You need to have [Cloned the repo to your local disk](/Contribute/LocalClone/Clone).  
You also need to already have changed something within your local clone.

## 私たちは何をします

For the sake of learning, we will create a file named `Test.md` which will be available in `AdvancedFunctions/Secret/Test` and add it to mkdocs.yml.

スクリーンショットはSublime Text 3 Editorから取得されます(VM上で登録されていないため)。 しかし、ファイルを作成/変更したいエディタは何でも使用できます。  
それはローカルで働くことの利点の一つである^^。

Screenshots of the example files: ![Test.md](/Contribute/LocalClone/assets/Example1_TestMD.png) ![mkdocs.yml](/Contribute/LocalClone/assets/Example1_mkdocsYML.png)

## Git ステータスと Git の追加/ステージ

`git status` コマンドは、どのファイルが変更されたかを示します。  
この例では、次のように示します。

![Git status call](/Contribute/LocalClone/assets/Example1_Bash_GitStatus.png)

ご覧のとおり、私たちは2つのセクションがあります, 変更されたファイルと追跡されていないファイル. 変更されたファイルは、インデックスと内容が異なるファイルです(gitは現在お使いのコンピュータにあるものとは別のバージョンを知っています)。  
追跡されていないファイルは、インデックスにまだ存在しないファイルです(git ではまだ追跡されていません)。

どちらの場合も、 *git add* または `git stage` を使用してファイルを git に指定できます。 `git stage`: ![Git status call](/Contribute/LocalClone/assets/Example1_Bash_GitStatus2.png)

これで、ファイルはコミットされるようにステージングされ、したがって緑色で印刷されます。 通知 これらのファイルのいずれかを変更する場合は、add コマンドを再度実行する必要があります。ステージング領域に現在の状態を追加するだけです。

## Git コミット

今、あなたはコミットを作成する必要があるファイルを追加しました.  
これは `git commit` コマンドを使用して行うことができます。

When you issue that command, all file states that are currently staged will be combined and added to the index.  
That means that you can create one commit that changes more than one file (something GH's online editor is not capable of).  
Usually you will want to create one commit per logical sector, so if you were to create a PR that adds documentation for ModA, ModB and ModC, you may want to create one commit that adds ModA, one that adds ModB and one that adds ModC.

### git 資格情報の設定

If this is the first time you create a commit using git you will see this message: ![Git status call](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_CredentialError.png)

つまり、git はあなたが誰であるかを知らないので、コミットの作成者が誰であるかはわかりません。 エラーメッセージに記載されているコマンドを実行しましょう。

    git config --global user.email "yourEmail"
    git config --global user.name "yourName"
    

メールには、GHアカウントに追加されたメールを使用してください。  
名前には何でも使用できますが、GHアカウント名を使用してみてください。

### コミットのタイトル/メッセージの設定

If your credentials are set correctly, you will get a screen like this: ![Git コミット メッセージ ウィンドウ](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message1.png)

This is from the text editor GitBash uses for that.  
To enter insert mode (so that you can write something), press the INSERT key.  
Now you can write your commit title (first line) and the commit message (everything below that).  
You can use the ENTER key to create a new line and everything starting with a `#` will be ignored.

着色は気にしないでください。  
INSERTモードを終了するには、ESCキーを押します。

今、あなたはあなたが完了していることをエディタに伝える必要があります。  
`:x` と入力して Enter キーを押します。

Here's a screen of what this may look like just before pressing enter to leave the editor: ![Git コミット メッセージ ウィンドウ](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message2.png)

### コミットメッセージ/タイトルを-mで設定する

あなたがbashエディタが好きではない場合や、それを押すためのキーを覚えておくのは難しいです `-m "message"` パラメータを使用することもできます。 `"` を開き、改行を作成できるようにマッチしないようにすることができます。 Finish by typing the maching `"`.  
Like in the editor, everything below the first line is considered part of the commit message.

The same commit message as above could be achieved by doing: ![-m を使用した Git コミット](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_MessageParameter.png)

## 続行方法

コミットの作成方法がわかったので、 [フォークにプッシュ](/Contribute/LocalClone/Push/) できます。