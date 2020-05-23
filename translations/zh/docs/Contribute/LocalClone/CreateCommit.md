# 创建提交

## 需求

你需要[在本地磁盘里拷贝了存储库](/Contribute/LocalClone/Clone)。  
你需要已经在本地副本里更改了一些东西。

## 我们将做什么

作为教学，我们将创建一个在 `AdvancedFunctions/Secret/Test` 里的名叫 `Test.md` 的文件，并将其添加到 mkdocs.yml 中。

这张截图截自 Sublime Text 3 编辑器（由于虚拟机的原因未注册），不过你可以使用你想用的任何编辑器。  
这是在本地工作的一个优点 ^_^。

示例文件的截屏： ![Test.md](/Contribute/LocalClone/assets/Example1_TestMD.png) ![mkdocs.yml](/Contribute/LocalClone/assets/Example1_mkdocsYML.png)

## git status 与 git add/stage

`git status`指令显示哪些文件被更改了。  
在我们的例子了其显示：

![Git status 调用](/Contribute/LocalClone/assets/Example1_Bash_GitStatus.png)

像你看到的一样，这里有两个部分，被更改的文件（modified files）与未监控的文件（untracked files）。 被更改的文件与索引区中的文件不同（git 所记录的是其与在你的电脑上不同的另一个版本）。  
未监控的文件并不存在于索引区中（git 还不知道它们）。

在两种情况下，你都可以通过 `git add` 或 `git stage` 让 git 将文件 *暂存*： ![Git status 调用](/Contribute/LocalClone/assets/Example1_Bash_GitStatus2.png)

现在，这些文件已经被暂存，准备提交，所以被以绿色显示。 注意：如果你现在再更改其中任意文件，就需要再次使用 add 指令，因为其只将当前的状态加入暂存区。

## Git commit

现在，你已经把文件添加入暂存区，需要创建一个提交（commit）。  
这可以通过`git commit`指令做到。

当你执行该命令时，所有被暂存的文件将会被结合并加入索引区。  
这意味着你可以创建一个包含多个文件的改动的提交（这是在 github 的在线编辑器里做不到的）。  
一般而言，你应该对每一个逻辑部分创建提交，也就是说如果你想创建一个对 modA, modB, modC添加文档的拉取请求（Pull Request），你应该创建一个添加 modA 的提交，一个添加 modB 的提交，以及一个添加 modC 的提交。

### 设置 git 凭据

如果这是您第一次使用 git 创建一个提交，您将会看到此消息： ![Git status 调用](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_CredentialError.png)

这意味着 git 不知道你是谁，所以其不知道该提交的作者应该是谁。 于是，运行在错误信息里显示的命令：

    git config --global user.email "你的邮箱地址"
    git config --global user.name "你的名称"
    

使用与你的 github 账号绑定的邮箱作为邮箱地址。  
可以使用任何文本作为名称，但最好使用你的 github 用户名。

### 设置提交的标题/内容

如果您的凭据设置正确，您将得到一个像这样的显示： ![Git commit 内容窗口](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message1.png)

这是 GitBash 所使用的文本编辑器。 按下 INSRET 键进入插入（insert）模式（以开始输入内容）。  
现在，你可以输入提交的标题（第一行）以及内容（下面的任何东西）。  
按下回车键创建新行，而以`#`开头的文本将被忽略。

不要在意其高亮颜色，这不是你现在需要担心的。  
按下 ESC 键以退出插入模式。

现在，你需要告诉编辑器你输入完了。  
可以通过输入`:x`然后按下回车键做到这一点。

这是在按下回车键离开编辑器前的显示：![Git commit 内容窗口](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message2.png)

### 使用 -m 参数设置提交的内容/标题

如果你不喜欢 bash 所用的编辑器或觉得记住需要按的键很难，你同样可以使用`-m "内容"`参数。 你可以只写一个`"`使其不匹配来写入换行。 输入相匹配的`"`结束提交文本。  
像在编辑器里一样，第一行下到任何东西都被认作提交内容的一部分。

可以通过以下操作实现与上面相同的提交内容： ![使用 -m 的 git commit](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_MessageParameter.png)

## 下一步该做什么

现在，你知道怎么创建提交了，你可以[将其推送（push）到你的分支中](/Contribute/LocalClone/Push/)。