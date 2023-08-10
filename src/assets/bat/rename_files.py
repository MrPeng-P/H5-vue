import os
import xlrd

# 获取当前文件夹路径
folder_path = os.path.dirname(os.path.abspath(__file__))

# 打开 car.xls 表格文件
workbook = xlrd.open_workbook(os.path.join(folder_path, 'car.xls'))
sheet = workbook.sheet_by_index(0)

# 遍历 Excel 表格中的每一行
for row in range(0, sheet.nrows):
    print('row',row)
    old_name = sheet.cell_value(row, 0).strip()  # 去除前后空格
    new_name = sheet.cell_value(row, 1)
    
    # 遍历文件夹中的文件，寻找匹配的文件名
    for file_name in os.listdir(folder_path):
        file_name_without_extension = os.path.splitext(file_name)[0].strip()  # 去除前后空格并去除后缀
        if file_name_without_extension == old_name:
            old_path = os.path.join(folder_path, file_name)
            new_path = os.path.join(folder_path, new_name + os.path.splitext(file_name)[1])
            os.rename(old_path, new_path)
            print(f'Renamed: {file_name} -> {new_name + os.path.splitext(file_name)[1]}')

print('文件名修改完成。')