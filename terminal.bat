@echo off

set CURRENT=%~dp0
set BATPATH=%~f0
IF %CURRENT:~0,3%==C:\ (
  copy %BATPATH% Z:\terminal.bat > NUL
  echo Z:\terminal.bat �ɃR�s�[���܂���
  echo ���񂩂�� Z:\terminal.bat ���J���Ă�������
  pause
  explorer /select,"Z:\terminal.bat" 
  goto END
)

set PATH=C:\Program Files\Java\jdk-14.0.2\bin\;%PATH%
cmd

:END
