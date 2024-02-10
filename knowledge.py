import random

def knowledge(path = "knowledges.txt"):
    try:
        with open(path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            return random.choice(lines).strip()
        
    except FileNotFoundError:
        print(f'FileNotFoundError')

if __name__=="__main__":
    print(knowledge())