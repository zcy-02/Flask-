# cookie加密配置，随便输入，大约20的字符就行
SECRET_KEY = "ahfkhkhfkfkhhsafkhs"

# 数据库配置信息
HOSTNAME = '127.0.0.1'
PORT = '3306'
DATABASE = 'zhiliaooa'
USERNAME = 'root'
PASSWORD = '123456'
DB_URI = 'mysql+pymysql://{}:{}@{}:{}/{}?charset=utf8mb4'.format(USERNAME, PASSWORD, HOSTNAME, PORT, DATABASE)
SQLALCHEMY_DATABASE_URI = DB_URI

# 邮箱配置
MAIL_SERVER = "smtp.qq.com"
MAIL_USE_SSL = True
MAIL_PORT = 465
MAIL_USERNAME = "zcy-violet-02@qq.com"
MAIL_PASSWORD = "gpswhrsqbaapeafe"
MAIL_DEFAULT_SENDER= "zcy-violet-02@qq.com"
# gpswhrsqbaapeafe
