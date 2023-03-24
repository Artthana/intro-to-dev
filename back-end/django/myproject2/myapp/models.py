from django.db import models

# Create your models here.

# CharField = เก็บข้อมูลอักขระ
# IntegerField = int
# FloatField = Float
# DataField = เก็บข้อมูลวันเดือนปี
# BooleanField = True/False

# command
# makemigrations = ที่เก็บโครงสร้างตารางจากโมเดล
# migrate = นำไฟล์ migrate ไปใช้งาน

class Person(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return  "ชื่อ " + self.name +", " + "อายุ: " + str(self.age)