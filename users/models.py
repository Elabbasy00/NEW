from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError
from .managers import CustomUserManager


USERNAME_REGEX = '^[a-zA-Z0-9.+-]*$'


def validate_length(value):
    if len(str(value)) != 14:
        raise ValidationError(
            _('Must be an 14 Number'),
            params={'value': value},
        )


class User(AbstractUser):
    username = models.CharField(max_length=150, unique=False, validators=[RegexValidator(
        regex=USERNAME_REGEX, message='Username must be alphanumeric or contain numbers', code='invalid_username')])

    email = models.EmailField(_('email address'), unique=True)

    user_uid = models.IntegerField(validators=([validate_length]))

    uid_image = models.ImageField(upload_to='media')

    profile_image = models.ImageField(upload_to="media")

    is_admin = models.BooleanField(default=False)

    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'user_uid']

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    def get_short_name(self):
        # The user is identified by their email address
        return self.username

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True
