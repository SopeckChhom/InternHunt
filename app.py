import json
import uuid
import boto3
from datetime import datetime
import decimal

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, decimal.Decimal):
            return int(obj) if obj % 1 == 0 else float(obj)
        return super().default(obj)


dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("InternshipApplications")

def create_application(event, context):
    try:
        data = json.loads(event["body"])
        item = {
            "id": str(uuid.uuid4()),
            "company": data["company"],
            "role": data["role"],
            "status": data.get("status", "applied"),
            "notes": data.get("notes", ""),
            "score": data.get("score", 0),
            "createdAt": datetime.utcnow().isoformat(),
            "updatedAt": datetime.utcnow().isoformat()
        }

        table.put_item(Item=item)

        return {
            "statusCode": 201,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({
                "message": "Application saved",
                "id": item["id"]
            })
        }
    except Exception as e:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": str(e)})
        }

def list_applications(event, context):
    try:
        response = table.scan()
        items = response.get("Items", [])

        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps(items, cls=DecimalEncoder)
        }
    except Exception as e:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": str(e)})
        }
