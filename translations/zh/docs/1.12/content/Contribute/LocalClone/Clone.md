# 拷贝

## 概要

此页面显示了如何将你的分支仓库拷贝到你的本地计算机。


## 前提

你需要有一个[分支CrT-wiki仓库](/Contribute/SetupGithub/)并且已经[安装了Git](/Contribute/LocalClone/InstallingGit/)。

## 第一步

首先，你需要在本地计算机上创建一个文件夹。这会将 wiki 拷贝到文件夹中。  
然后你需要打开你的命令提示符或进入 git 子程序。  
我打算使用 git 子程序，但这个过程也应该适用于命令提示符（CMD）。

要打开git 子程序，只需选中该文件夹后右键单击即可：  
![选择了 githBash 选项后的右键菜单](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## 拷贝你的分支

在文件夹中打开 Git Bash 后，你需要获取代码仓库的网址（url）。  
你可以在你的 Github 分支上找到这个网址：

![定位代码仓库的网址](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

你需要用到这个URL。 我们将使用 HTTPS 网址进行拷贝。如果你知道如何使用 SSH，你可能根本不需要这个指南。  
你可以单击按钮将字符串复制到剪贴板。

现在运行命令`git clone<repo-Url>`:

![拷贝命令](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![拷贝成功](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

现在你文件目录中应该有一个名为 `Crafttweaker-Documentation` 的新文件夹。  
浏览并输入 `git status`：

![更改目录并运行 git status](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)


## 下一步该做什么
现在你有一个本地的Wiki克隆，你可以开始创建和编辑文件，并最终 [创建一个提交](/Contribute/LocalClone/CreateCommit/)。