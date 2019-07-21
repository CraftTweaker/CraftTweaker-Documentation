# 克隆

## 概要

此页面显示了如何将你的分支仓库克隆到你的本地计算机。

## 先决条件

你应该有[分支CrT-wiki仓库](/Contribute/SetupGithub/)并且你需要[安装Git](/Contribute/LocalClone/InstallingGit/)。

## 第一步

首先，你需要在本地计算机上创建一个文件夹，这个文件夹是你想要 wiki 复制到的地方。  
然后你需要在该文件夹中打开你的命令提示符或进入 Git 子程序。  
我打算使用 Git 子程序，但同样的过程也应该适用于CMD。

要打开 Git 子程序，只需浏览该文件夹，然后用鼠标右键单击：  
![选择 githBash 选项后浏览上下文菜单](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## 克隆你的分支

在文件夹中打开 Git 子程序后，你需要获取代码仓库的 url。  
你可以在 GitHub 上检查你的分支 时找到这个网址：

![定位代码仓库的网址](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

你需要使用该URL。 我们将使用HTTPS进行复制，如果你知道如何设置SSH，你可能不需要本指南。  
你还可以单击按钮将字符串复制到剪贴板。

现在需要运行命令`git clone<repo-Url>`

![克隆命令](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![克隆命令成功](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Now you should have a new folder named `CraftTweaker-Documentation` in your directory.  
Let's navigate to it and issue a `git status`:

![更改目录和发布 git 状态](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## 下一步该做什么

现在你有一个本地的Wiki克隆，你可以开始创建和编辑文件，并最终 [创建一个提交](/Contribute/LocalClone/CreateCommit/)。