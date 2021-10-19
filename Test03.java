class Example{
	public static void main(String args[]){
		int number;
		Scanner input = new Scanner(System.in);
		System.out.println("Enter number : ");
		number = input.nextInt();
		if (number >= 100){
			//Start if body
			System.out.println("Hello");
			System.out.println("World");
			//end if body
		}
		System.out.println("program end");
		
	}
}
