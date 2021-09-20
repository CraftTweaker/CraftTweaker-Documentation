# 创建提交

## 需求

You need to have [Cloned the repo to your local disk](/Contribute/LocalClone/Clone).  
You also need to already have changed something within your local clone.

## 我们将做什么

作为教学，我们将创建一个在 `AdvancedFunctions/Secret/Test` 里的名叫 `Test.md` 的文件，并将其添加到 mkdocs.yml 中。

The screenshots are taken from a Sublime Text 3 Editor (unregistered because on a VM), but you can use whatever editor you want to create/modify the files.  
That's one of the advantages of working locally ^^.

Screenshots of the example files: ![Test.md](/Contribute/LocalClone/assets/Example1_TestMD.png) ![mkdocs.yml](/Contribute/LocalClone/assets/Example1_mkdocsYML.png)

## git status 与 git add/stage

The `git status` command tells you which files have been changed.  
In our example it shows us this:

![Git status 调用](/Contribute/LocalClone/assets/Example1_Bash_GitStatus.png)

像你看到的一样，这里有两个部分，被更改的文件（modified files）与未监控的文件（untracked files）。 Modified files are files whose content differ from the index (git knows another version of them than you currently have on your computer).  
Untracked files are files that don't yet exist in the index (git doesn't know them yet).

In both cases you can tell git to *stage* the files using either `git add` or `git stage`: ![Git status 调用](/Contribute/LocalClone/assets/Example1_Bash_GitStatus2.png)

现在，这些文件已经被暂存，准备提交，所以被以绿色显示。 注意：如果你现在再更改其中任意文件，就需要再次使用 add 指令，因为其只将当前的状态加入暂存区。

## Git commit

Now that you have added the files you need to create a commit.  
This can be done using the `git commit` command.

When you issue that command, all file states that are currently staged will be combined and added to the index.  
That means that you can create one commit that changes more than one file (something GH's online editor is not capable of).  
Usually you will want to create one commit per logical sector, so if you were to create a PR that adds documentation for ModA, ModB and ModC, you may want to create one commit that adds ModA, one that adds ModB and one that adds ModC.

### 设置 git 凭据

If this is the first time you create a commit using git you will see this message: ![Git status 调用](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_CredentialError.png)

这意味着 git 不知道你是谁，所以其不知道该提交的作者应该是谁。 于是，运行在错误信息里显示的命令：

    git config --global user.email "你的邮箱地址"
    git config --global user.name "你的名称"


For the email, use one that has been added to your GH account.  
For the name you can use anything but try to use your GH account name.

### 设置提交的标题/内容

If your credentials are set correctly, you will get a screen like this: ![Git commit 内容窗口](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message1.png)

This is from the text editor GitBash uses for that.  
To enter insert mode (so that you can write something), press the INSERT key.  
Now you can write your commit title (first line) and the commit message (everything below that).  
You can use the ENTER key to create a new line and everything starting with a `#` will be ignored.

Don't mind the coloring, that's not your concern right now.  
To exit the INSERT mode, press ESC.

Now you need to tell the editor that you are finished.  
You can do that by typing pressing `:x` and pressing ENTER.

Here's a screen of what this may look like just before pressing enter to leave the editor: ![Git commit 内容窗口](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message2.png)

### 使用 -m 参数设置提交的内容/标题

如果你不喜欢 bash 所用的编辑器或觉得记住需要按的键很难，你同样可以使用`-m "内容"`参数。 你可以只写一个`"`使其不匹配来写入换行。 Finish by typing the maching `"`.  
Like in the editor, everything below the first line is considered part of the commit message.

The same commit message as above could be achieved by doing: ![使用 -m 的 git commit](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_MessageParameter.png)

## 下一步该做什么

现在，你知道怎么创建提交了，你可以[将其推送（push）到你的分支中](/Contribute/LocalClone/Push/)。