import mysql.connector
from mysql.connector import Error

def get_connection():
    try:
        conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database=''
        )

        if conn.is_connected():
            print('Conectado ao banco com sucesso')
            return conn
        else:
            print('falha ao se conectar ao banco')
            conn.close()
            return None

    except Error as e:
        print(f'Erro ao se conectar ao banco {e}')
        return None