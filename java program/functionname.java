import java.util.Scanner;

public class functionname {
        public static String call(String msg,String name){
            String total = name+", \""+msg+"\"";
            return total;
        }
    public static void main(String[] args) {
        System.out.println("Enter the Messege :-");
        String msg = new Scanner(System.in).nextLine();
        System.out.println("Enter the Your name :-");
        String  name = new Scanner(System.in).nextLine();
        System.out.print(call(msg,name));

    }
    
}
