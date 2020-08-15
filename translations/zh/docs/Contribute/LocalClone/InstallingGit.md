# Installing Git

In order for you to [clone your forked repository](/Contribute/LocalClone/Clone/) you will need to install git.  
Git is a distributed version control system (basically, it's what GitHub, BitBucket and other version control services use).

## 正在获取Git

您可以通过打开命令提示并执行命令 `git`来检查您是否安装了git。  
如果你得到使用页面, 那么你就安装了它, 可以跳过这个页面。  
如果你没有得到使用页面, 那么你要么没有安装, 要么你还没有将它添加到你的 PATH (见下文)。 在这样的情况下，您需要安装git或将其添加到您的路径：  
![CMD 提示颁发git 命令而不安装 git](/Contribute/LocalClone/assets/CMD_noGit.png)

### 正在下载并安装 Git

If you do not have git installed, then you can download the installer from [their official page](https://git-scm.com/downloads/).  
Choose your Operation System, download the installer, run it and follow the instructions.  
If you are not sure on which options to check, leave them as default.  
If you cannot proceed after setting your preferred text editor, go back one page and then go forward to the page again, in some cases this will make the `next` button appear.

### 添加Git到您的 PATH

安装Git后，它应该添加到您的 PATH。 如果没有，请先关闭并打开您的命令。  
如果它仍然告诉您它不知道git, 请重启您的计算机。  
如果它仍然告诉您它不知道git，您可能需要将它添加到您的路径。

我不会涵盖如何详细添加它，您需要做的只是将安装git的目录添加为路径。  
如果您安装了 Git 到 `C:\Program Files\Git` 您需要将 `C:\Program Files\Git\cmd` 添加到您的路径。  
稍后重启您的命令提示或计算机。

从技术上说，这并不是必需的，但它使一些命令更加容易。

## 下一步该做什么

Now that you have installed git you can [clone your forked repository](/Contribute/LocalClone/Clone/).