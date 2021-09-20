# Отправка

## Требования

You need to know how to [create Commits](/Contribute/LocalClone/CreateCommit/) and you need to have created at least one of them.

## Что мы сделаем

Мы используем зафиксированный нами коммит (например, тот, из [страницы про создание коммитов](/Contribute/LocalClone/CreateCommit/)), чтобы отправить наши изменения на GitHub.

## Проверка текущего статуса

Если вы запускаете `git status`, вы узнаете, насколько ваша локальная копия отстает или опережает вашу ветвь.

В данном случае мы опережаем на 1 коммит:  
![Вызов git status call](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Git push

Now we run `git push` to push our changes to the remote branch.  
You might be asked for your GH username and password.  
**Careful:** When you use TwoFactor Authorization (2FA) you need to create and use a *Personal Access Token* instead of your GH password!

![Диалог учетных данных](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

To verify that the commit is actually on the fork, you can check the commit list that should now have the commit in there: ![Список коммитов, где коммит](/Contribute/LocalClone/assets/Example1_CommitList.png)

## How to continue

Now that you have pushed your changes to your fork, you can use GH to [create a Pull request](/Contribute/PullRequest/).  
This is the same procedure as if you were using the online editor to edit files.