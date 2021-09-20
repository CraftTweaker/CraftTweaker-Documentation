# 使用 GitHub 的在线编辑器编辑文件

## 需求

你需要有一个 github 帐户，并[将 wiki 复制到你的帐户中](/Contribute/SetupGithub)。

## Einführung

GitHub's online editor allows you to change and create files using nothing but your browser.  
It may not be as versatile as [using a local copy](/Contribute/LocalClone/CreateCommit/) but you don't need to worry about [setting up git](/Contribute/LocalClone/InstallingGit/) and all.

This guide will show you how to edit an already existing file using github's online editor.  
You may want to edit the page because you have found a typo or want to include a better example, whatever the reason, feel free to commit changes and eventually [file a Pull Request](/Contribute/PullRequest).

但请记住，你只能编辑英文版文件，翻译将通过 [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/) 处理。

## 找到该文件

如果要编辑现有文件，首先需要找到该文件。

在大多数情况下，你可以通过它的 Wiki Url 找到该文件。

经验法则： ` # ` 指的是文档文件夹，之后的所有内容都是嵌套文件夹，最后才是文件。

For example, the file creating  
[https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/](https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/)  
can be found in  
`docs/AdvancedFunctions/Arrays_and_Loops.md`

## 编辑该文件

After you have successfully located the file, click on it to open it in the GitHub file view.  
Here you can see how the wiki entry will roughly look like, though no navigation bar is present as this is only the entry content.

Click on the little pen icon to open the editor: ![编辑按钮](/Contribute/assets/OnlineEditor_EditButton.png)

这个编辑器允许你如你所愿的修改这个文件，也提供编译后的预览版本。 此预览左侧有彩色条形图，它们分别指示:

- 绿色：此部分以前不在此页上。
- 黄色: 此部分以前存在于此页上，但已更改，例如更正了拼写错误，或提供了其他信息。
- 红色: 此部分以前存在于此页上，但已被删除。
- 无：此部分未被更改。

如果你不熟悉文件的语法， wiki 使用的是 Markdown 语法。 谷歌上应该有很多教程（如果你想的话，也可以在这个 wiki 上添加教程页面）。

## 保存/提交更改

更改文件后，你需要让 GitHub 知道你要保存所做的更改。

That's what the commit box below your Editor is for:  
You cannot simply save the file, you need to provide a summary of what you did (commit title) and optionally a short description where you can put additional information like why you did the changes or what exactly was changed.

默认情况下，它大致如下图所示:  
![默认的提交框](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

在此示例中，提交标题 (或编辑摘要) 为 `Update Arrays_and_Loops.md`。 GitHub 不知道你做了什么更改，所以它会生成这段通用的描述。

你可能需要添加其他标题或说明，这虽然不是必要的，但这可以让人更加轻松的查看你之后提交的 Pull Request。

如果你的 GitHub 帐户关联了多个电子邮件地址，你可以选择你做出修改的电子邮件地址。 This will not have any real impact for contributing, though.  
You can also decide whether you want to commit directly to your master branch or rather create a new branch for your commit. 在大多数情况下，你只需要提交到 master branch 上即可。

A filled out example might look like this: ![填写完的提交框](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## 下一步该做什么

After you have committed your changes, you can go on and edit or [Create](/Contribute/OnlineEditor_Create) more files using the online editor.  
After you have done all your changes, you can [file a Pull Request](/Contribute/PullRequest).