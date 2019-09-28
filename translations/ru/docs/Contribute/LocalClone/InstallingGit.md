# Установка Git

Для того чтобы [клонировать ваш форк репозитория](/Contribute/LocalClone/Clone/), вам нужно установить Git.  
Git &mdash; это распределенная система контроля версий (если проще, это то, что используют GitHub, BitBucket и другие такие сервисы).

## Получение Git

Вы можете проверить, установлен ли у вас Git, открыв командную строку, и введя команду `git`.  
Если вы получите страницу с документацией, значит, что он у вас установлен, и вы можете пропустить этот этап.  
Если вы ее не получили, значит, что Git либо не установлен, либо вы не добавили его в PATH (ниже). В этом случае вам нужно или установить Git, или добавить в PATH:  
![CMD Prompt issueing w git command without git being installed](/Contribute/LocalClone/assets/CMD_noGit.png)

### Загрузка и установка Git

If you do not have git installed, then you can download the installer from [their official page](https://git-scm.com/downloads/).  
Choose your Operation System, download the installer, run it and follow the instructions.  
If you are not sure on which options to check, leave them as default.  
If you cannot proceed after setting your preferred text editor, go back one page and then go forward to the page again, in some cases this will make the `next` button appear.

### Добавление Git в PATH

After you have installed Git, it should be added to your PATH. If not, first try to close and open your command prompt.  
If it still tells you it doesn't know git, restart your computer.  
If it still tells you it doesn't know git, you may need to add it to your path.

I won't cover how to add it in detail, all you need to do is add the directory where you installed git to as path.  
If you for example installed Git to `C:\Program Files\Git` you will need to add `C:\Program Files\Git\cmd` to your path.  
Afterwards restart your command prompt or your computer.

Technically, this is not required but it makes some commands easier.

## Что дальше

Now that you have installed git you can [clone your forked repository](/Contribute/LocalClone/Clone/).