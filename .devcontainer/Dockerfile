FROM node:22

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Argumente zur UID/GID-Anpassung
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=1000

# Setze sudo-Zugriff
RUN echo "$USERNAME ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Passe UID und GID an (damit Datei-Zugriffe im gemounteten Ordner gehen)
RUN usermod -u ${USER_UID} ${USERNAME} \
    && groupmod -g ${USER_GID} ${USERNAME}

# Setze DEVCONTAINER-Flag
ENV DEVCONTAINER=true
