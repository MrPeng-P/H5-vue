import os
import xlrd

# 获取当前文件夹路径
folder_path = os.path.dirname(os.path.abspath(__file__))

# 打开 test.xls 表格文件
workbook = xlrd.open_workbook(os.path.join(folder_path, 'test.xls'))
sheet = workbook.sheet_by_index(0)

# 遍历 A 列的单元格
for row in range(0, sheet.nrows):

    file_name = sheet.cell_value(row, 0).strip()  # 去除前后空格
    
    # 创建文件路径
    file_path = os.path.join(folder_path, file_name)
    
    # 创建空白文件
    with open(file_path, 'w') as file:
        file.write('')

    print(f'Created: {file_name}')

print('文件创建完成。')
