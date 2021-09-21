from django.db import models
from django.db.models import Q

from . import utils
from .user import User


class Conversation(utils.CustomModel):
    users = models.ManyToManyField(
        User,
        db_column="userId",
        related_name="conversations"
    )
    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    updatedAt = models.DateTimeField(auto_now=True)

    # find all conversations containing two user Ids
    def find_conversation(user1Id, user2Id):
        # return conversations or None if none exist
        try:
            return Conversation.objects.filter(
                Q(users__id=user1Id),
                Q(users__id=user2Id)
            )
        except Conversation.DoesNotExist:
            return None
