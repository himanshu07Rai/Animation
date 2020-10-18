#include <bits/stdc++.h>
using namespace std;

class Shape
{

public:
    double x, y;

    void get_data()
    {
        cout << "\nEnter value of x : ";
        cin >> x;
        cout << "\nEnter value of y : ";
        cin >> y;
    }
    virtual void display_area()
    {
        cout << "Virtual function";
    }
};

class Triangle : public Shape
{
public:
    void display_area()
    {
        double area = (x * y) / 2;
        cout << "\nArea of triangle = " << area;
    }
};

class Rectangle : public Shape
{
public:
    void display_area()
    {
        double area = x * y;
        cout << "\nArea of rectangle = " << area;
    }
};
int main()
{
    Shape S;
    Triangle T;
    Shape *sptr;
    S.get_data();
    Triangle *tptr;
    // tptr = &T;
    sptr = &T;
    T.display_area();
}