package com.tiagobaratieri.dsmovieflix.services;


import com.tiagobaratieri.dsmovieflix.entities.User;
import com.tiagobaratieri.dsmovieflix.repositories.UserRepository;
import com.tiagobaratieri.dsmovieflix.services.exeptons.ForbiddenException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.common.exceptions.UnauthorizedUserException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Transactional(readOnly = true)
    public User authenticated() {
        try {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            return userRepository.findByEmail(username);
        } catch (Exception e) {
            throw new UnauthorizedUserException("Invalid user");
        }
    }

    public void validateUserMember(Long userId) {
        User user = authenticated();
        if (!user.hasHole("ROLE_MEMBER")) {
            throw new ForbiddenException("Acess denied");
        }
    }
}