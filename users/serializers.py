from rest_framework import serializers

from users.models import User


from allauth.account.adapter import get_adapter
from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.serializers import LoginSerializer as RestAuthLoginSerializer
from rest_auth.models import TokenModel


class UserRegSerializer(RegisterSerializer):
    user_uid = serializers.IntegerField()
    uid_image = serializers.ImageField(use_url=True)
    profile_image = serializers.ImageField(use_url=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password',
                  'user_uid', 'uid_image', 'profile_image']

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'user_uid': self.validated_data.get('user_uid', ''),
            'uid_image': self.validated_data.get('uid_image', ''),
            'profile_image': self.validated_data.get('profile_image', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.user_uid = self.cleaned_data.get('user_uid')
        user.uid_image = self.cleaned_data.get('uid_image')
        user.profile_image = self.cleaned_data.get('profile_image')

        user.save()
        adapter.save_user(request, user, self)
        return user


class UserDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'profile_image']


class LoginSerializer(RestAuthLoginSerializer):
    username = None


class CustomTokenSerializer(serializers.ModelSerializer):
    user = UserDetailSerializer(read_only=True)

    class Meta:
        model = TokenModel
        fields = ('key', 'user', )
