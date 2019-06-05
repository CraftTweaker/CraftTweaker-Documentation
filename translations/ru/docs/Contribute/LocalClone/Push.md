# Отправка

## Требования

You need to know how to [create Commits](/Contribute/LocalClone/CreateCommit/) and you need to have created at least one of them.

## Что мы сделаем

We will use the commit(s) we have created (e.g. the example in [create Commits](/Contribute/LocalClone/CreateCommit/)) and push the changes to GitHub.

## Проверить текущий статус

Если вы запускаете `git status`, вы узнаете, насколько ваша локальная копия отстает или опережает вашу ветвь.

В данном случае мы опережаем на 1 коммит:  
![Вызов git status call](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Git push

Теперь мы запускаем `git push`, чтобы отправить наши изменения на удаленную ветвь.  
У вас могут запросить ваш логин и пароль GH.  
**Важно:** когда вы используете двухфакторную аутентификацию (2FA), вам может понадобиться создать и использовать *персональный ключ доступа* вместо пароля GH!

![Диалог учетных данных](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

To verify that the commit is actually on the fork, you can check the commit list that should now have the commit in there: ![Список коммитов, где коммит](/Contribute/LocalClone/assets/Example1_CommitList.png)

## Как продолжить

Now that you have pushed your changes to your fork, you can use GH to [create a Pull request](/Contribute/PullRequest/).  
This is the same procedure as if you were using the online editor to edit files.