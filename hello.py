import turtle

tr = turtle.Turtle()
Screen = turtle.Screen()
Screen.bgcolor('black')
tr.color('red')
for i in range(10):
    tr.forward(100)
    tr.left(90)
    tr.left(45)
    tr.color('green')
    tr.forward(100)
turtle.done()