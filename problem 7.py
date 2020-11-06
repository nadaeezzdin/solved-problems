#What is the 10 001st prime number?
import math

def find_prime(n): 
    if n <= 1: 
        return False
  
    maxDiv = math.floor(math.sqrt(n))  
    for i in range(2, 1 + maxDiv): 
        if n % i == 0: 
            return False
    return True


c=0
for n in range(1,1000000): 
    num = find_prime(n)
    if c == 10001:
        print("10001st prime number:", n)
        break 
    c += num

