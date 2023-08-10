import os
import xlwt

# 获取当前文件夹路径
folder_path = os.path.dirname(os.path.abspath(__file__))

# 创建一个新的 Excel 工作簿
workbook = xlwt.Workbook(encoding='utf-8')
sheet = workbook.add_sheet('图片文件列表')

# 遍历文件夹中的文件
index = 0
for file_name in os.listdir(folder_path):
    if file_name.lower().endswith(('.png', '.jpg','.txt')):
        file_name_without_extension, _ = os.path.splitext(file_name)
        sheet.write(index, 0, file_name_without_extension)
        index += 1

# 保存 Excel 文件
excel_file_path = os.path.join(folder_path, 'image_file_list.xls')
workbook.save(excel_file_path)

print(f'Excel 文件已保存至：{excel_file_path}')
