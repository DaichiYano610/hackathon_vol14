import random


def knowledge(path):
    try:
        with open(path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            return random.choice(lines).strip()
        
    except FileNotFoundError:
        print(f'FileNotFoundError')
    
for i in range(10):
    print(knowledge("C:/Users/rimio/hack/coffe_timer/knowledges.txt"))
