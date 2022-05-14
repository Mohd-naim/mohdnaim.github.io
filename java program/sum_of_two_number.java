import java.util.Scanner;

class sum_of_two_number{
    public static int sum(int num1,int num2){
     int sum = num1 + num2;
     return sum;
    }
    public static void main(String[] args) {
    System.out.println("Enter the Fisrt Number:-");
    int num1 = new Scanner(System.in).nextInt();
    System.out.println("Enter the second Number:-");
    int num2 = new Scanner(System.in).nextInt();
    System.out.print("The Summation of "+num1+" and "+num2+" is :-"+sum(num1,num2));  
    }
}