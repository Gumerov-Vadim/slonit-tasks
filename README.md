# Task 4
Короткое руковдоство для старта работы с Git.
![git image](https://avatars.githubusercontent.com/u/18133?s=280&v=4)
---

# Содержание
1. [git help](#git-help)
2. [git config](#git-config)
3. [git init](#git-init)
4. [git status](#git-status)
5. [git add](#git-add)
6. [git commit](#git-commit)

---

## <a id="git-help">git help</a>
**команда:**
```bash
  git help (command)
```

Команда используется для получения информации о командах git или о какой-нибудь конкретной команде git.  
_Например:_
```bash
  git help add
```

## <a id="git-config">git config</a>
**команда:**
```bash
  git config
```

Команда позволяет настраивать параметры Git. С ее помощью можно установить имя пользователя, email, редактор по умолчанию и другие настройки.  
_Примеры:_
 - Установка имени пользователя:
  `git config --global user.name "Ваше Имя"`
 - Установка email:
  `git config --global user.email "ваш.email@example.com"`
 - Просмотр всех настроек:
  `git config --list`
 - Установка редактора по умолчанию (например, VS Code):
  `git config --global core.editor "code --wait"`

## <a id="git-init">git init</a>
**команда:**
```bash
  git init
```

Команда git init используется для создания нового репозитория Git. Она инициализирует пустой репозиторий в текущей директории, создавая скрытую папку .git, в которой хранятся все данные и история изменений проекта.  
_Примеры:_
 - Создание репозитория в текущей директории:
  `git init`
 - Создание репозитория в указанной директории:
  `git init <имя-папки>`

## <a id="git-status">git status</a>
**команда:**
```bash
  git status
```

Команда git status показывает состояние рабочего каталога и индекса.  Она позволяет увидеть, какие файлы были изменены, но не добавлены в индекс, какие файлы добавлены в индекс, но не закоммичены, и другую полезную информацию.

## <a id="git-add">git add</a>
**команда:**
```bash
  git add <file>
```

Команда git add добавляет изменения из рабочего каталога в индекс (staging area) для последующего коммита. Вы можете добавить конкретный файл или все измененные файлы.  

_Примеры:_
```bash
  git add myfile.txt  
  git add .
```
  
## <a id="git-commit">git commit</a>

**команда:**
```bash
  git commit -m "commit message"  
```

Команда git commit создает новый коммит с изменениями, которые были добавлены в индекс с помощью git add. Каждый коммит должен сопровождаться сообщением, которое описывает внесенные изменения.  

_Примеры:_
```bash
  git commit -m "Добавлен новый функционал"  
```
  
---

# Дополнительные материалы:
[Git - Documentation](https://git-scm.com/doc)
