#lang racket

;PICK(working)
(define (pick index a-list)
  (cond
    ((null? a-list) '())
    ((< index 1) '())
    ((= index 1) (car a-list))
    ((> index 1) (pick (- index 1) (cdr a-list)))))

;MY REVERSE(working)
(define (my-reverse a-list)
(define (reverse-helper a-list new)
  (if (null? a-list)
      new
      (reverse-helper (cdr a-list) (cons(car a-list) new))))
  (reverse-helper a-list '()))

;DEEP REVERSE(working)
(define (deep-reverse a-list)
  (if (list? a-list) (my-reverse (map deep-reverse a-list))
  a-list))

;REDUCE
(define (reduce func a-list seed)
(if(null? a-list)
    seed
    (func
    (reduce func(cdr a-list)seed)(car a-list))))


;FRONTIER(working)
(define (frontier a-tree)
  (cond
    ((pair? a-tree) (append(frontier (car a-tree))(frontier (cdr a-tree))))
    ((null? a-tree) cons empty)
  ((cons a-tree empty))))


(provide pick my-reverse deep-reverse reduce frontier)
  