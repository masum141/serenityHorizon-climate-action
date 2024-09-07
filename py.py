import numpy as np

np.set_printoptions(suppress = True)

A = np.random.randn(3,3)
print(A)

w, v = np.linalg.eig(A)    
print(f'eigenvalues = {w}')    
print(f'eigenvectors = \n{v}')

D = np.diag(w)  
R = v
A_decomp = np.dot(R, np.dot(D, np.linalg.inv(R))) 
print(A_decomp)

As = (A + A.T) / 2 
print(As)

D = np.diag(w)
R = v
A_decomp = np.dot(R, np.dot(D, R.T))
print(A_decomp)