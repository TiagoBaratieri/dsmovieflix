package com.tiagobaratieri.dsmovieflix.services.exeptons;

public class UnauthorizedException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public UnauthorizedException(String msg) {
        super(msg);
    }
}