from fastapi import APIRouter
from schemas import ContactForm
import smtplib
from email.mime.text import MIMEText

router = APIRouter()

ADMIN_EMAIL = "mathavan1100@gmail.com"
APP_PASSWORD = "glkkwiwviiegzqup"


@router.post("/contact")
async def submit_contact(data: ContactForm):

    print("------ NEW CONTACT MESSAGE ------")
    print("Name:", data.name)
    print("Email:", data.email)
    print("Message:", data.message)

    # -------------------------
    # EMAIL TO ADMIN
    # -------------------------
    subject_admin = "New Contact Message from Website"

    body_admin = f"""
New Contact Message

Name: {data.name}
Email: {data.email}

Message:
{data.message}
"""

    msg_admin = MIMEText(body_admin)
    msg_admin["Subject"] = subject_admin
    msg_admin["From"] = ADMIN_EMAIL
    msg_admin["To"] = ADMIN_EMAIL


    # -------------------------
    # CONFIRMATION EMAIL TO USER
    # -------------------------
    subject_user = "We received your message"

    body_user = f"""
Hello {data.name},

Thank you for contacting us.

We have received your message and our team will respond soon.

Your message:
{data.message}

Best regards,
Lotus MEP Solutions
"""

    msg_user = MIMEText(body_user)
    msg_user["Subject"] = subject_user
    msg_user["From"] = ADMIN_EMAIL
    msg_user["To"] = data.email


    # -------------------------
    # SEND EMAILS
    # -------------------------
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(ADMIN_EMAIL, APP_PASSWORD)

    # send to admin
    server.sendmail(ADMIN_EMAIL, ADMIN_EMAIL, msg_admin.as_string())

    # send confirmation to user
    server.sendmail(ADMIN_EMAIL, data.email, msg_user.as_string())

    server.quit()

    return {"message": "Message sent successfully"}