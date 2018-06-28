using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;
using System.IO;

namespace createQrCode
{
    class Program
    {
        static void Main(string[] args)
        {
            createPNG("c:/temp","c:/",2480,3508,620,700,30,80);
        }
        //a4纸   2480x3508
        //2480/4 620  3508/5 701        620     700 
        static void createPNG(string path,string outPath,int width,int height,int wid,int hei,int left,int top)
        {
            //string[] files = Directory.GetFiles(path);

            DirectoryInfo dir = new DirectoryInfo(path);
            FileInfo[] files = dir.GetFiles();
            //foreach(var file in files)
            //{
            //   string fileName= file.Name;
            //}
            Bitmap bitmap = new Bitmap(width, height);
            Graphics graphics = Graphics.FromImage(bitmap);
            graphics.FillRectangle(Brushes.White, new Rectangle(0, 0, width, height));

            string start, end=null;
            start = files[0].Name.Split('.')[0];

            Font drawFont = new Font("Arial", 24, FontStyle.Bold);//显示的字符串使用的字体
            SolidBrush drawBrush = new SolidBrush(Color.Black);//写字符串用的刷子
            PointF drawPoint;
            for (int i=0;i<5;i++)
                for(int j = 0; j < 4; j++)
                {
                    if ((4*i+j)>files.Length-1)
                        break;
                    Image image = Image.FromFile(files[4 * i + j].FullName);
                    graphics.DrawImage(image, j * wid + left, i * hei + top);
                    string fn = files[4 * i + j].Name.Split('.')[0];
                        end = fn;
                   string str = System.Text.RegularExpressions.Regex.Replace(fn, @"(\w{4})", "$1-").Trim('-');
                     drawPoint = new PointF(j * wid + left, i * hei + top +480);//显示的字符串左上角的坐标
                    graphics.DrawString(str, drawFont, drawBrush, drawPoint);                    
                }
            string range = start + "--" + end;
             drawPoint = new PointF(width/2 - 400, 20);//显示的字符串左上角的坐标
            graphics.DrawString(range, drawFont, drawBrush, drawPoint);
             drawPoint = new PointF(width / 2 - 400, height-80);//显示的字符串左上角的坐标
            graphics.DrawString(range, drawFont, drawBrush, drawPoint);
            bitmap.Save(outPath+range+".bmp");

            
         //  Image.FromFile(path)
        }
    }
}