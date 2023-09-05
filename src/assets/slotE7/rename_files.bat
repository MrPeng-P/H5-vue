@echo off
setlocal

REM 调用 Python 脚本来读取 car.xls 文件中的表格对应关系并修改文件名
python rename_files.py

echo 文件名修改完成。

endlocal
