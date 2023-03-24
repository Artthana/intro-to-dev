import re
from tokenize import PseudoExtras
from django.shortcuts import render,redirect
from django.http import HttpResponse
from myapp.models import Person
from django.contrib import messages

# Create your views here.
def index(request):
    # return HttpResponse("Test Wongsathorn")
    all_person = Person.objects.all()
    return render(request, "index.html",{"all_person":all_person})

def about(request):
    # return HttpResponse("เกี่ยวกับเรา")
    return render(request, "about.html")

def form(request):
    # return HttpResponse("กรอกข้อมูล")
    if request.method == "POST":
        name = request.POST["name"]
        age = request.POST["age"]
        # print(name , age)
        person = Person.objects.create(
            name=name,
            age=age
        )
        person.save()
        messages.success(request,"บันทึกข้อมูลสำเร็จ")
        return redirect("/")
    else :
        return render(request, "form.html")

def edit(request,person_id):
    if request.method == "POST":
        person = Person.objects.get(id=person_id)
        print(person.age)
        print(request.POST["age"])
        if person.name == request.POST["name"] and person.age == int(request.POST["age"]):
            return redirect("/")
        else:
            person.name = request.POST["name"]
            person.age = request.POST["age"]
            person.save()
            messages.success(request,"อัพเดทข้อมูลสำเร็จ")
            return redirect("/")

    else:
        person = Person.objects.get(id=person_id)
        return render(request,"edit.html",{"person":person})

def delete(request, person_id):
    person = Person.objects.get(id=person_id)
    person.delete()
    messages.success(request,"ลบข้อมูลสำเร็จ")
    return redirect("/")